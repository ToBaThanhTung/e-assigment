import { Gitlab } from '@gitbeaker/node';

class GitlabService {
  constructor(token) {
    this.api = new Gitlab({
      host: 'https://gitlab.com',
      oauthToken: token,
    });
  }

  async getAllProjects() {
    try {
      return await this.api.Projects.all({
        membership: true,
        simple: true,
      });
    } catch (err) {
      throw new Error('Call Api Errors', err);
    }
  }

  /**
   * Get all branches from porject id
   *
   * @param {id} String Project ID
   */
  async getAllBranches(id) {
    try {
      return await this.api.Branches.all(id);
    } catch (err) {
      throw new Error('Call Api Errors', err);
    }
  }

  /**
   * Get repository tree
   *
   * @param {id} String Project ID
   * @param {ref} String Branch Name
   * @param {recursive} Boolean Project ID
   * @param {per_page} String pagination
   *
   */
  async getRepositoryTree(id, ref, recursive, path) {
    try {
      return await this.api.Repositories.tree(id, { ref, recursive, path });
    } catch (err) {
      throw new Error('Call Api Errors', err);
    }
  }


  /**
   * Get repository tree
   *
   * @param {id} String Project ID
   * @param {path} String path to the file
   * @param {ref} String branch
   *
   */
  async getRepositoryFile(id, path, ref) {
    try {
      return await this.api.RepositoryFiles.showRaw(id, path, ref);
    } catch (err) {
      throw new Error('Call Api Errors', err);
    }
  }
}

export default GitlabService;
