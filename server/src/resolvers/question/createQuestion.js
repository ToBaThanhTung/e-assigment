/**
 * Sign In resolver
 *
 * @param {object} root The return value of the resolver for this field's parent
 * @param {object} args An object that contains all GraphQL arguments provided for this field.
 * @param {object} context  Object shared across all resolvers
 */

const createQuestion = async (
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

export default createQuestion;
