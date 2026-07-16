import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

// Route-level code-splitting: each page ships only when visited.
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'))
const ImpactPage = lazy(() => import('./pages/ImpactPage'))
const DonorsPage = lazy(() => import('./pages/DonorsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PostPage = lazy(() => import('./pages/PostPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-paper" role="status" aria-label="Loading page">
      <span className="size-10 animate-spin rounded-full border-4 border-line border-t-brand" />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="programs"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProgramsPage />
            </Suspense>
          }
        />
        <Route
          path="impact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ImpactPage />
            </Suspense>
          }
        />
        <Route
          path="donors"
          element={
            <Suspense fallback={<PageLoader />}>
              <DonorsPage />
            </Suspense>
          }
        />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<PageLoader />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={<PageLoader />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <PostPage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
