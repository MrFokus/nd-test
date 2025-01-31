export function removeQueryParamUrl(deleteQuery: string | string[]) {
  const router = useRouter();
  const route = useRoute();
  if (!Array.isArray(deleteQuery)) {
    deleteQuery = [deleteQuery];
  }
  const copyQuery = structuredClone(route.query);
  deleteQuery.forEach((q) => {
    delete copyQuery[q];
  });
  router.replace({ query: copyQuery });
}
