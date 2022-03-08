export const getUrl = (language) => {
  return `https://api.github.com/search/repositories?q=stars:%3E=100000+language:${language}&created:%3C2022-03-05&created:%3E2022-02-28&sort=stars&order=desc`
};
  