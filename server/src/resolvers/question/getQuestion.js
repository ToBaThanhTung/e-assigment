const getQuestion = async (
  root,
  { input: { tag, description, difficutiy, answer, content } },
  { User, authUser, Question }
) => {
  try {
    const { id: userId } = authUser;
    const question = await new Question({
      tag,
      description,
      difficutiy,
      content,
      answer,
    }).save();

    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { testBank: question.id } }
    );

    return question;
  } catch (err) {
    console.log(err);
    throw new Error('Create question failed', err);
  }
};

export default getQuestion;
