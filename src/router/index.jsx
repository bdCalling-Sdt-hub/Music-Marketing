import { createBrowserRouter } from "react-router-dom";
import Home from "../auth/Home";
import ForgotPassword from "../auth/ForgotPassword";
import VerifyOtp from "../auth/VerifyOtp";
import UpdatePassword from "../auth/UpdatePassword";
import DashboardHome from "../dashboardHome/DashboradHome";
import Main from "../layout/Main";
import Profile from "../dashboardMenu/headerMenu/Profile";
import EditProfiel from "../dashboardMenu/headerMenu/EditProfile";
import Settings from "../dashboardMenu/sidebarMenu/settings/Settings";
import PrivacyPolicy from "../dashboardMenu/sidebarMenu/settings/PrivacyPolicy/PrivacyPolicy";
import EditPrivacyPolicy from "../dashboardMenu/sidebarMenu/settings/PrivacyPolicy/EditPrivacyPolicy";
import TermsCondition from "../dashboardMenu/sidebarMenu/settings/termsCondition/TermsCondition";
import EditTermsCondition from "../dashboardMenu/sidebarMenu/settings/termsCondition/EditTermsCondition";
import ApprovedUsers from "../dashboardMenu/sidebarMenu/ApprovedUsers";
import ErrorPage from "./ErrorPage";
import AboutUs from "../dashboardMenu/sidebarMenu/settings/AboutUs/AboutUs";
import EditAboutUs from "../dashboardMenu/sidebarMenu/settings/AboutUs/EditAboutUs";
import Admins from "../dashboardMenu/sidebarMenu/Admins/Admins";
import InfluncerHome from "../dashboardMenu/influencerPage/InfluncerHome";
import CampaignDetails from "../dashboardMenu/influencerPage/CampaignDetails";
import Campaigns from "../dashboardMenu/influencerPage/Campaigns";
import Campaignsupload from "../dashboardMenu/influencerPage/Campaignsupload";
import CampaignsuploadedFiles from "../dashboardMenu/influencerPage/CampaignsuploadedFiles";
import Feedbacks from "../dashboardMenu/influencerPage/Feedbacks";
import SelectRole from "../auth/SelectRole";
import SignUpInfluencer from "../auth/SignUpInfluencer";
import SignUpManager from "../auth/SignUpManager";
import FeedbacksUpload from "../dashboardMenu/influencerPage/FeedbacksUpload";
import Earnings from "../dashboardMenu/influencerPage/Earnings";
import InfluncerProfile from "../dashboardMenu/influencerPage/InfluncerProfile";
import InfluncerProfileEditprofile from "../dashboardMenu/influencerPage/InfluncerProfileEditprofile";
import ClientHome from "../dashboardMenu/Client/ClientHome";
import ClientMain from "../dashboardMenu/Client/ClientMain";
import ClientCampaignsCreate from "../dashboardMenu/Client/ClientCampaignsCreate";
import ClientCampaigns from "../dashboardMenu/Client/ClientCampaigns";
import ClientCampaignsCompleted from "../dashboardMenu/Client/ClientCampaignsCompleted";
import ClientCampaignsCompletedViewUgc from "../dashboardMenu/Client/ClientCampaignsCompletedViewUgc";
import ClientCampaignsActiveViewUgc from "../dashboardMenu/Client/ClientCampaignsActiveViewUgc";
import ClientCampaignsCompletedViewUgcViewDraft from "../dashboardMenu/Client/ClientCampaignsCompletedViewUgcViewDraft";
import ClientInfluencers from "../dashboardMenu/Client/ClientInfluencers";
import ClientInfluencerProfile from "../dashboardMenu/Client/ClientInfluencerProfile";
import ClientInfluencerInfluencerActivity from "../dashboardMenu/Client/ClientInfluencerInfluencerActivity";
import ClientSingleInfluencerActivity from "../dashboardMenu/Client/ClientSingleInfluencerActivity";
import ClientInfluencerProfileDetails from "../dashboardMenu/Client/ClientInfluencerProfileDetails";
import ClientInfluencerProfileDetailsEdit from "../dashboardMenu/Client/ClientInfluencerProfileDetailsEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectRole />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Home></Home>,
  },
  {
    path: "/signup-influencer",
    element: <SignUpInfluencer />,
  },
  {
    path: "/signup-manager",
    element: <SignUpManager />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "verifyotp",
    element: <VerifyOtp />,
  },
  {
    path: "updatepassword",
    element: <UpdatePassword />,
  },
  {
    path: "/influencer",
    element: <Main />,
    children: [
      {
        path: "home",
        element: (
          // <PrivateRoute>
          <InfluncerHome />
          // </PrivateRoute>
        ),
      },
      {
        path: "campaignsdetails/:id",
        element: <CampaignDetails />,
      },
      {
        path: "campaignsupload/:id",
        element: <Campaignsupload />,
      },
      {
        path: "campaignsuploadedfiels/:id",
        element: <CampaignsuploadedFiles />,
      },
      {
        path: "feedbacks/:id",
        element: <Feedbacks />,
      },
      {
        path: "feedbacks/upload/:id",
        element: <FeedbacksUpload />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: 'campaigns/uploadcampaign',
        element: <Campaignsupload />
      },
      {
        path: 'earnings',
        element: <Earnings />
      },

      {
        path: 'profile',
        element: <InfluncerProfile />,
      },
      {
        path: 'profile/editprofile',
        element: <InfluncerProfileEditprofile />,
      },





      {
        path: "userslist",
        element: <ApprovedUsers />,
      },
      {
        path: "admins",
        element: <Admins />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacypolicy/editprivacypolicy",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "settings/termcondition",
        element: <TermsCondition />,
      },
      {
        path: "settings/edittermcondition",
        element: <EditTermsCondition />,
      },

      {
        path: "settings/aboutus",
        element: <AboutUs />,
      },
      {
        path: "settings/editaboutus",
        element: <EditAboutUs />,
      },
    ],
  },
  {
    path: "/client",
    element: <ClientMain />,
    children: [
      {
        path: "home",
        element: <ClientHome />,
      },
      {
        path: "campaigns",
        element: <ClientCampaigns />,
      },
      {
        path: "campaigns/create",
        element: <ClientCampaignsCreate />,
      },
      {
        path: "campaigns/edit",
        element: <ClientCampaignsCreate />,
      },
      {
        path: "campaigns/completed/:id",
        element: <ClientCampaignsCompleted />,
      },
      {
        path: "campaigns/completed/view-ugc",
        element: <ClientCampaignsCompletedViewUgc />,
      },
      {
        path: "campaigns/completed/view-ugc/:id",
        element: <ClientCampaignsCompletedViewUgcViewDraft />,
      },
      {
        path: "campaigns/active/view-ugc/:id",
        element: <ClientCampaignsActiveViewUgc />,
      },
      {
        path: "campaigns/active/view-ugc",
        element: <ClientCampaignsActiveViewUgc />,
      },


      {
        path: "influencers",
        element: <ClientInfluencers />,
      },
      {
        path: "influencers/:id",
        element: <ClientInfluencerProfile />,
      },
      {
        path: "influencers/influencer-activity/:id",
        element: <ClientInfluencerInfluencerActivity />,
      },
      {
        path: "influencers/single-influencer-activity/:id",
        element: <ClientSingleInfluencerActivity />,
      },

      {
        path: "profile",
        element: <ClientInfluencerProfileDetails />,
      },
      {
        path: "profile/editprofile",
        element: <ClientInfluencerProfileDetailsEdit />,
      }

    ],

  }
]);
