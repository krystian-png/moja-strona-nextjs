import type { KrsLandingCopy } from "@/lib/krs-language-copy"

export const enLanding: KrsLandingCopy = {
  locale:"en", languageName:"English", homeLabel:"Home",
  eyebrow:"POLISH COMPANY REGISTER · LEGAL SUPPORT",
  titleLineOne:"Changes to your company's KRS registration.",
  titleLineTwo:"Documents and filings supported by Polish legal counsel.",
  hero:[
    "Do you operate a limited liability company (sp. z o.o.) or another company registered in Poland? We assist with updating information in the National Court Register (KRS).",
    "We identify the applicable procedure, prepare the necessary documentation and handle the application to amend your company's KRS entry before the registration court.",
    "You can describe your case in writing in English. After examining the documents and circumstances, we will confirm the scope of work and provide an individual quotation."
  ],
  highlights:["Polish legal counsel","Written communication","Quote before engagement"],
  sections:{
    servicesEyebrow:"LEGAL SERVICES",servicesTitle:"What changes can we register with the KRS?",
    servicesIntro:"We assist with changes to company data in the Polish National Court Register. Documentation and procedure depend on the type of change, the articles of association and the circumstances of the shareholders and management.",
    stepsEyebrow:"OUR PROCESS",stepsTitle:"How do company changes get filed with the KRS?",
    stepsNote:"Much of the communication and exchange of documents can take place electronically. Certain transactions, however, may require specific document forms, signatures, notarisation or procedures conducted in Poland. We assess those requirements case by case.",
    lawyerTitle:"Your matter is handled by Polish legal counsel",
    lawyerBody:[
      "Matters are handled by Polish qualified legal advisers (radcy prawni) providing legal services to businesses concerning company operations and KRS proceedings.",
      "We determine the documents, signing formalities and registration procedure necessary for each change.",
      "We prepare documentation and represent clients in the agreed scope before the registration court."
    ],
    pricingEyebrow:"CLEAR TERMS",pricingTitle:"How much does a KRS change cost?",
    pricingBody:[
      "The fee depends on the type of change, number of documents and complexity of the matter.",
      "Filing an application based on ready-to-use documents differs from drafting resolutions, powers of attorney, bilingual documents or arranging notarial formalities.",
      "We provide an individual quotation after reviewing the matter. Court fees, stamp duty and any notarial costs are stated separately."
    ],
    faqEyebrow:"GOOD TO KNOW",faqTitle:"Frequently asked questions",
    ctaEyebrow:"TELL US ABOUT YOUR COMPANY",ctaTitle:"Need to register a change in the KRS?",
    ctaBody:"Briefly describe your case and provide the company's KRS number, if available. We will determine the required steps and offer a suitable scope of assistance.",
    ctaLabel:"Describe your case"
  },
  services:[
    {title:"Changes to the management board and representation",description:"Preparation of documents concerning the appointment or dismissal of management board (zarząd) members and changes to company representation rules."},
    {title:"Shareholders and share transfers",description:"We prepare documents required for share transfers, including applicable resolutions and share transfer agreements, and related updates to shareholder information reportable to the KRS."},
    {title:"Change of registered address or seat",description:"Registration of a change of address or a move of the company's registered seat (siedziba), using the procedure required for the circumstances."},
    {title:"Amendments to articles of association",description:"Assistance with drafting amendments to a company's constitutional documents and the filings required to register them in the prescribed legal form."},
    {title:"Changes to PKD activity codes",description:"Review of the company's business activities, selection of appropriate PKD classification codes and preparation of filings for the KRS."},
    {title:"Commercial proxy and other data",description:"Filing appointments and revocations of commercial proxies (prokurent) and other reportable changes to company data."},
    {title:"Company incorporation in Poland",description:"We assist with forming a Polish sp. z o.o. via S24 or a notarial procedure, subject to an individual quotation."}
  ],
  steps:[
    {title:"You describe the proposed changes",description:"Provide your company's KRS number and a short description of the issue. We may request further information and documents."},
    {title:"We confirm the procedure and cost",description:"We check the required resolutions, statements, powers of attorney and signing methods, then present the scope of work and fee."},
    {title:"We prepare documents and handle the filing",description:"Once terms are agreed, we prepare documentation, coordinate any necessary formalities and handle the KRS filing and proceedings within the agreed scope."}
  ],
  faq:[
    {question:"Do I need to be physically present for every step?",answer:"Not necessarily. Some matters can be handled through an authorised representative or using other legally permitted methods of adopting resolutions and signing documents."},
    {question:"Can the entire matter be completed online?",answer:"Communication and transfer of many documents can take place online. Certain documents, however, may require specific formalities or notarisation."},
    {question:"Do I need a Polish electronic signature?",answer:"Not in every case. The answer depends on the documents, signatories and filing procedure. We assess the possibility of acting through a representative."},
    {question:"Can I communicate in English?",answer:"Yes. You can send your enquiry and correspond with us in English. Documents for Polish authorities must comply with Polish legal requirements."},
    {question:"What is the difference between a change of address and a change of seat?",answer:"A company's seat (siedziba) refers to the town or city, while its address identifies a specific location. Different documentation may be required."},
    {question:"Should KRS changes be filed through PRS or S24?",answer:"Changes in the register of entrepreneurs are filed electronically. The appropriate system depends on the company's formation documents and the nature of the change."}
  ],
  form:{
    heading:"Describe your case",intro:"Tell us what needs to change in your company. If you know its KRS number, include it in your message.",
    fullName:"Full name",email:"Email address",phone:"Phone",optional:"Optional",message:"Message",messagePlaceholder:"Describe your case...",
    submit:"Send enquiry",submitting:"Sending...",success:"Your message has been sent. We will respond by email.",
    error:"Your message could not be sent. Please try again.",
    policyBefore:"By submitting this form, you confirm you have read the ",policyLink:"Privacy Policy (in Polish)",policyAfter:".",
    validationName:"Enter your full name (at least 3 characters).",validationEmail:"Enter a valid email address.",
    validationPhone:"The phone number must not exceed 20 characters.",validationMessage:"Your message must contain at least 10 characters."
  },
  experienceNote:"We have experience handling several hundred company changes and KRS registration proceedings.",
  footer:"Polish KRS company registration legal services",
  polishLegalNote:"Legal terms and privacy policy are currently available in Polish."
}
