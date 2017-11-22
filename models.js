const AnswerSchema = new Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  updatedat: { type: Date, default: Date.now },
  votes: { type: Number, default: 0}
});

const QuestionSchema = new Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  answers: [AnswerSchema]
});

const Question = mongoose.model('Question', QuestionSchema);
