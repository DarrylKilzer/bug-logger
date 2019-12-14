import mongoose from "mongoose";
import Note from "../models/Note";
import Bug from "../models/Bug";

const _noteRepository = mongoose.model("Note", Note);
const _bugRepository = mongoose.model("Bug", Bug);

class CleanupService {
  async cleanupAsync() {
    await _noteRepository.deleteMany({ reportedBy: 'D$' })
    await _bugRepository.deleteMany({ reportedBy: 'D$' })
    return { message: "Deleted all test junk!" }
  }
}

const cleanupService = new CleanupService();
export default cleanupService;