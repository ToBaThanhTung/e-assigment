const getAuthUser = async (root, args, context) => {
  try {
    const { authUser } = context;
    if (!authUser) return null;
    return authUser;
  } catch (err) {
    throw new Error('Get Auth user failed', err);
  }
};

export default getAuthUser;
