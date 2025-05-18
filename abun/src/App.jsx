import AppSidebar from "@/components/app-sidebar"
import ArticlesPage from "@/components/article"

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4 md:p-6 overflow-auto">
        <ArticlesPage />
      </main>
    </div>
  )
}
