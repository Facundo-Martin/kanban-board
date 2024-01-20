import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { orgId } = auth();
  return <div>Organization: {orgId}</div>;
};

export default OrganizationIdPage;
