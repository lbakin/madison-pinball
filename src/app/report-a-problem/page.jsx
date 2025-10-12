import RichText from "@/components/RichText";
import { sanityClient } from "~/src/lib/client";
import { reportProblemQ } from "~/src/lib/queries";
import { locationsIndexQ } from "~/src/lib/queries";
import ReportProblemFormClient from "./report-problem-form.client";

export const revalidate = 60;

export default async function ReportAProblemPage() {
  const data = await sanityClient.fetch(reportProblemQ);
  const {
    title = "Report a Problem",
    intro,
    formName = "report-a-problem",
    successTitle = "Thanks",
    successBody = "Your report has been submitted. We will take a look.",
    useLocationsCollection = true,
    extraLocations = [],
  } = data || {};

  // Optional locations from Sanity
  let locations = [];
  if (useLocationsCollection) {
    const locs = await sanityClient.fetch(locationsIndexQ);
    locations = (locs || []).map((l) => l?.name).filter(Boolean);
  } else {
    locations = extraLocations || [];
  }

  return (
    <div className="min-h-[70vh] bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-semibold">{title}</h1>
       
        {intro && (
          <div className="mb-8">
            <RichText value={intro} />
          </div>
        )}

        
        <ReportProblemFormClient
          formName={formName}
          successTitle={successTitle}
          successBody={successBody}
          locations={locations}
        />
      </div>
    </div>
  );
}
