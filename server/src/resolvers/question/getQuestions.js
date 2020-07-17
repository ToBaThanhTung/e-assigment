const getQuestions = async (root, {}, { User, authUser, Question }) => {
  try {
    const { id: userId } = authUser;
    const user = await User.findOne({ _id: userId })
      .populate('testBank')

    return { questions: user.testBank };
  } catch (err) {
    console.log(err);
    throw new Error('Get question failed', err);
  }
};

export default getQuestions;
