import {useRouter} from 'next/router';

const getOrgId = () => {
  const location = useRouter();
  const splitPath = location.asPath.split('/');
  return splitPath[2];
};

export default getOrgId;
