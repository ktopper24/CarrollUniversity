using System.Web;
using System.Web.Optimization;

namespace CarrollUniversityWebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/client/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/client/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/client/Scripts/bootstrap.js",
                      "~/client/Scripts/respond.js",
                      "~/client/Scripts/angular.min.js",
                      "~/client/Scripts/angular-route.js",
                      "~/client/Scripts/angularRoutes.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/client/bootstrap.css",
                      "~/client/site.css"));
        }
    }
}
