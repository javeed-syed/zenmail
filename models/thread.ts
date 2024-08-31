import mongoose from "mongoose";

// Todo: Create a more stable data model take name and mail from model
const threadSchema = new mongoose.Schema({
  name: {type: String, required: true},
  mailFrom: { type: String, required: true },
  subject: { type: String, required: true },
  tag: { type: String, default: "default"},
  campaign: { type: String, default: "default"},
  emails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Email',
  }],
  updatedAt: { type: Date, default: Date.now },
});

const Thread = mongoose.models.Thread || mongoose.model('Thread', threadSchema);

export default Thread;