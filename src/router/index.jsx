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
import AdminMain from "../dashboardMenu/Admin/AdminMain";
import AdminHome from "../dashboardMenu/Admin/AdminHome";
import AdminCampaigns from "../dashboardMenu/Admin/AdminCampaigns";
import AdminCampaignsCreate from "../dashboardMenu/Admin/AdminCampaignsCreate";
import AdminClients from "../dashboardMenu/Admin/AdminClients";
import AdminClientsRemove from "../dashboardMenu/Admin/AdminClientsRemove";
import ClientCampaignsCompletedViewUgcViewDraftViewFeedback from "../dashboardMenu/Client/ClientCampaignsCompletedViewUgcViewDraftViewFeedback";
import ClientCampaignsActiveViewUgcViewDraft from "../dashboardMenu/Client/ClientCampaignsActiveViewUgcViewDraft";
import AdminCampaignsEdit from "../dashboardMenu/Admin/AdminCampaignsEdit";
import AdminCampaignsCompletedViewUgcViewDraftViewFeedback from "../dashboardMenu/Admin/AdminCampaignsCompletedViewUgcViewDraftViewFeedback";
import AdminCampaignsCompletedViewUgcViewDraft from "../dashboardMenu/Admin/AdminCampaignsCompletedViewUgcViewDraft";
import AdminCampaignsCompletedViewUgc from "../dashboardMenu/Admin/AdminCampaignsCompletedViewUgc";
import AdminCampaignsCompleted from "../dashboardMenu/Admin/AdminCampaignsCompleted";
import AdminCampaignsActive from "../dashboardMenu/Admin/AdminCampaignsActive";
import AdminCampaignsActiveViewUgc from "../dashboardMenu/Admin/AdminCampaignsActiveViewUgc";
import AdminCampaignsActiveViewUgcViewDraft from "../dashboardMenu/Admin/AdminCampaignsActiveViewUgcViewDraft";
import AdminCampaignsActiveViewUgcViewDraftViewFeedback from "../dashboardMenu/Admin/AdminCampaignsActiveViewUgcViewDraftViewFeedback";
import AdminInfluencer from "../dashboardMenu/Admin/AdminInfluencer";
import AdminInfluencerRemove from "../dashboardMenu/Admin/AdminInfluencerRemove";
import AdminInfluencerProfile from "../dashboardMenu/Admin/AdminInfluencerProfile";
import AdminInfluencerInfluencerActivity from "../dashboardMenu/Admin/AdminInfluencerInfluencerActivity";
import AdminSingleInfluencerActivity from "../dashboardMenu/Admin/AdminSingleInfluencerActivity";
import AdminInfluencerPay from "../dashboardMenu/Admin/AdminInfluencerPay";
import AdminInfluencerPaySuccess from "../dashboardMenu/Admin/AdminInfluencerPaySuccess";
import AdminTransactions from "../dashboardMenu/Admin/AdminTransactions";
import AdminProfile from "../dashboardMenu/Admin/AdminProfile";
import AdminClientsProfileView from "../dashboardMenu/Admin/AdminClientsProfileView";

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
        path: "campaigns/completed/view-feedback",
        element: <ClientCampaignsCompletedViewUgcViewDraftViewFeedback />,
      },
      {
        path: "campaigns/active/view-ugc",
        element: <ClientCampaignsActiveViewUgc />,
      },
      {
        path: "campaigns/active/view-ugc/:id",
        element: <ClientCampaignsActiveViewUgcViewDraft />,
      },
      {
        path: "campaigns/active/view-feedback",
        element: <ClientCampaignsCompletedViewUgcViewDraftViewFeedback />,
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

  },
  {
    path: "/admin",
    element: <AdminMain />,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "campaigns",
        element: <AdminCampaigns />,
      },
      {
        path: "campaigns/create",
        element: <AdminCampaignsCreate />,
      },
      {
        path: "campaigns/edit",
        element: <AdminCampaignsEdit />,
      },



      {
        path: "campaigns/completed/:id",
        element: <AdminCampaignsCompleted />,
      },
      {
        path: "campaigns/completed/view-ugc",
        element: <AdminCampaignsCompletedViewUgc />,
      },
      {
        path: "campaigns/completed/view-ugc/:id",
        element: <AdminCampaignsCompletedViewUgcViewDraft />,
      },
      {
        path: "campaigns/completed/view-feedback",
        element: <AdminCampaignsCompletedViewUgcViewDraftViewFeedback />,
      },



      {
        path: "campaigns/active/:id",
        element: <AdminCampaignsActive />,
      },
      {
        path: "campaigns/active/view-ugc",
        element: <AdminCampaignsActiveViewUgc />,
      },
      {
        path: "campaigns/active/view-ugc/:id",
        element: <AdminCampaignsActiveViewUgcViewDraft />,
      },
      {
        path: "campaigns/active/view-feedback",
        element: <AdminCampaignsActiveViewUgcViewDraftViewFeedback />,
      },


      {
        path: "clients",
        element: <AdminClients />,
      },
      {
        path: "clients/profile/:id",
        element: <AdminClientsProfileView />,
      },
      {
        path: "clients/remove",
        element: <AdminClientsRemove />,
      },



      {
        path: "influencers",
        element: <AdminInfluencer />,
      },
      {
        path: "influencers/pay",
        element: <AdminInfluencerPay />,
      },
      {
        path: "influencers/pay-success",
        element: <AdminInfluencerPaySuccess />,
      },
      {
        path: "influencers/remove",
        element: <AdminInfluencerRemove />,
      },
      {
        path: "influencers/profile/:id",
        element: <AdminInfluencerProfile />,
      },
      {
        path: "influencers/influencer-activity/:id",
        element: <AdminInfluencerInfluencerActivity />,
      },
      {
        path: "influencers/single-influencer-activity/:id",
        element: <AdminSingleInfluencerActivity />,
      },


      {
        path: "transactions",
        element: <AdminTransactions />
      },

      {
        path: "profile",
        element: <AdminProfile />
      }






    ]
  }
]);