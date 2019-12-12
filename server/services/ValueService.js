import mongoose from "mongoose";
import Value from "../models/Value";

const _repository = mongoose.model("Value", Value);

class ValueService {
  async getAll() {
    return await _repository.find({});
  }
}

const valueService = new ValueService();
export default valueService;
