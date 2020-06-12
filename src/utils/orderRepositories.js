export default async function orderByStars(repositoriesData) {
  const dataTmp = Object.assign([], repositoriesData.data);

  await dataTmp.sort( (repositoryActual, nextRepository) => {
    return nextRepository.stargazers_count - repositoryActual.stargazers_count;
  });

  return dataTmp;
}
