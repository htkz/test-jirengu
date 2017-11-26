const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const SubSchema = new Schema({
  userId: { type: ObjectId, required: true, index: 1 },
  url: { type: String, required: true },
});

const SubModel = mongoose.model('qiqi', SubSchema);

async function insert(sub) {
  const created = await SubModel.create(sub);
  return created;
}

async function findByUserId(userId) {
  const sub = await SubModel.find(s => s.subId === userId);
  return sub;
}

async function list(params) {
  const match = {};
  const flow = SubModel.find(match);
  const subs = await flow.exec();
  return subs;
}

module.exports = {
  insert,
  list,
  findByUserId,
};

