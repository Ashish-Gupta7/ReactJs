# react-router-dom

## 1. Routing Basics

### BrowserRouter: Provides the routing context for the app and uses the HTML5 history API.

### Routes: Wraps individual routes in the app, replacing the older Switch component.

### Route: Defines the path and component to render for a specific route.

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

## 2. Navigation

### Link

1. Used for navigation between pages without reloading the page.
2. Replaces the traditional anchor (<a>) tag to enable client-side routing.

```jsx
<Link to="/about">Go to About</Link>
```

### NavLink

1. Similar to <Link>, but with built-in styling for active links.
2. Automatically adds an "active" class to the link if it matches the current URL.

```jsx
<NavLink
  style={(e) => (e.isActive ? { textDecoration: "underline" } : {})}
  className={(e) => (e.isActive ? "text-emerald-500" : "")}
  to="/items"
>
  Items
</NavLink>
```

### useNavigate()

1. A hook that allows programmatic navigation in React.
2. You can use it to redirect the user to another page.

```jsx
const navigate = useNavigate();
navigate("/home");
// navigate(-1)  // for one step back
// navigate(+1)  // for one step ahead
```

## 3. Dynamic Routing

### useParams()

1. A hook to access URL parameters.
2. Useful when your routes contain dynamic segments like /user/:id.

```jsx
const { id } = useParams();
```

## 4. useLocation()

1. A hook that returns the current URL's location object, including the pathname, search (query parameters), and state.
2. Useful for tracking navigation history or current page details.

```jsx
const location = useLocation();
console.log(location.pathname); // Outputs current path
```

## 5. Not Found (404) Page

Handling non-existent routes by adding a catch-all route at the end:

```jsx
<Route path="*" element={<NotFound />} />
```
