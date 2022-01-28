const templates = {
  basic: [
    {
      name: "candidateName",
      type: "text",
      label: "Your Name",
    },
    {
      name: "specialization",
      type: "text",
      label: "Specialization",
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
    },
    {
      name: "picture",
      type: "url",
      label: "picture",
    },
  ],
  employment: [
    {
      name: "startDate",
      type: "date",
      label: "Start Date",
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",
    },
    {
      name: "descriptor",
      type: "text",
      label: "Role",
    },
    {
      name: "institution",
      type: "text",
      label: "Organization / Company",
    },
    {
      name: "location",
      type: "text",
      label: "Location",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
  ],
  education: [
    {
      name: "startDate",
      type: "date",
      label: "Start Date",
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",
    },
    {
      name: "descriptor",
      type: "text",
      label: "Qualification",
    },
    {
      name: "institution",
      type: "text",
      label: "Institution",
    },
    {
      name: "location",
      type: "text",
      label: "Location",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
  ],
  projects: [
    {
      name: "descriptor",
      type: "text",
      label: "Project",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
  ],
};

export default templates;
