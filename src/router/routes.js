import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import AttorneyGeneral from "../views/About/AttorneyGeneral.vue";
import Services from "../views/About/Services.vue";
import Organizationalstructure from "../views/About/Organizationalstructure.vue";
import Documents from "../views/Documents/LegalDocuments/LegalDocuments.vue";
import agreements from "../views/Documents/LegalDocuments/agreements.vue";
import LegalDocuments from "../views/Documents/LegalDocuments/LegalDocuments.vue";
import cabinetDecisions from "../views/Documents/LegalDocuments/Cabinet-decisions.vue";
import Budget from "../views/Documents/LegalDocuments/Budget.vue";
import OfficialBulletins from "../components/Official-Bulletins.vue";
import BulletinsContents from "../views/Documents/Publications/Bulletins-Contents.vue";
import Constitution from "../views/Documents/Publications/Constitution.vue";
import TaxExemption from "../views/Documents/Publications/TaxExemption.vue";
import PublicNotary from "../views/Documents/Publications/PublicNotary.vue";
import Resolutions from "../views/Documents/LegalDocuments/Resolutions.vue";
import Institutions from "../views/Institutions/Institutions.vue";
import Trainings from "../views/Trainings/Trainings.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/about/attorney-general",
    name: "AttorneyGeneral",
    component: AttorneyGeneral,
  },
  {
    path: "/about/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/about/organizational-structure",
    name: "OrganizationalStructure",
    component: Organizationalstructure,
  },
  {
    path: "/documents/legal-documents",
    name: "LegalDocuments",
    component: LegalDocuments,
  },
  {
    path: "/documents/legal-documents/agreements",
    name: "Agreements",
    component: agreements,
  },
  {
    path: "/documents/legal-documents/cabinet-decisions",
    name: "CabinetDecisions",
    component: cabinetDecisions,
  },
  {
    path: "/documents/legal-documents/budget",
    name: "Budget",
    component: Budget,
  },
  {
    path: "/documents/legal-documents/official-bulletins",
    name: "OfficialBulletins",
    component: OfficialBulletins,
  },
  {
    path: "/documents/legal-documents/resolutions",
    name: "Resolutions",
    component: Resolutions,
  },
  {
    path: "/documents/Publications/bulletins-contents",
    name: "BulletinsContents",
    component: BulletinsContents,
  },
  {
    path: "/documents/Publications/constitution",
    name: "Constitution",
    component: Constitution,
  },
  {
    path: "/documents/Publications/tax-exemption",
    name: "TaxExemption",
    component: TaxExemption,
  },
  {
    path: "/documents/Publications/PublicNotary",
    name: "PublicNotary",
    component: PublicNotary,
  },
  {
    path: "/institutions",
    name: "Institutions",
    component: Institutions,
  },
  {
    path: "/trainings",
    name: "Trainings",
    component: Trainings,
  },
];

export default routes;
