# React Router 6

This is an implementation of the React Router version 6 which has a few variations from the version 5. Here are a few differences that I noted when upgrading to version 6:

- Switch and Redirect are removed, as there is another way to implement specificity in routes. This has been changed to <Routes> for ease in creation of application.
<Route path> and <Link to> are now relative, so manual interpolation of match.path and match.route is not needed. 
  
- For descendant routes, <Route exact> is no longer used. Instead, we use a trailing * in the path to indicate a deep match. 
  
- Instead of react-router-config, you can use <useRoutes> to define the routes as JS objects
  
- Link to has now been updated as <Link to=” ”> so that it maps to the correct URL and does not render to another route, thereby causing a potential bug that you would have to change. It will also render to the corresponding parent route irrespective of the slash
  
- useHistory has now been changed to as useNavigate, which means that it can do the calls that the useHistory function used to do. 


