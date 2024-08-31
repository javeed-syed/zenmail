import dbConnect from '@/lib/dbConnect';
import Thread from '@/models/thread';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {

  const threadId = req.nextUrl.searchParams.get('threadId');

  await dbConnect();
  console.log('threadId', threadId);
  
  const authResponse = await isAuth();
  if(authResponse) return authResponse;
  let thread;
    try {
      try {
        thread = await Mail.find({ threadId });
      } catch (error) {
        console.log(error);
      }
      console.log(thread);
      
      if (!thread) {
        return Response.json(
          { message: 'Thread not found', success: false },
          { status: 404 }
        );
      }
      return Response.json(
        { thread, success: true },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { message: 'Internal server error', success: false },
        { status: 500 }
      );
    }
}

export async function DELETE(req: NextRequest) {
  
  const threadId = req.nextUrl.searchParams.get('threadId');

  console.log(threadId);
  

  await dbConnect();
  const authResponse = await isAuth();
  if(authResponse) return authResponse;

  try {
      const thread = await Thread.deleteOne({
          _id:threadId,
      });
      console.log(thread);   
      if (thread.deletedCount === 1) {
        console.log(thread.deletedCount);
        
        return Response.json(
          {message: 'Thread deleted successfully', success: true},
          {status: 200}
        )
      }
      return Response.json(
        {message: 'Thread not found', success: false},
        {status: 404}
      )
    } catch (error) {
      return Response.json(
        {message: 'Internal server error', success: false},
        {status: 500}
      )
    }
}

export async function POST(request: NextRequest) {
  await dbConnect();
  const { subject, from, cc, to, body, isRead } = await request.json();
  const authResponse = await isAuth();
  if(authResponse) return authResponse;

  const threadId = request.nextUrl.searchParams.get('threadId')

  try {
    const newEmail = await Mail.create({
      threadId, subject, from, cc, to, body, isRead, 
      createdAt: new Date(),
    });

    await Thread.findOneAndUpdate(
      { threadId },
      { $push: { emails: newEmail._id }, updatedAt: new Date() }
    );

    return Response.json(
      { message: 'Mail reply sent successfully', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding message:', error);
    return Response.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}