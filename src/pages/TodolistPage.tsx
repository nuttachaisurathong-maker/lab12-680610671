import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskCard, { type TaskProps } from "../components/TaskCard";
import Footer from "../components/Footer";

export default function TodolistPage() {
  const tasks: TaskProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: true,
    },
  ];
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
        <Sidebar userName="Nuttachai Surathong" type="Sidebar" />

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header />
          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">Todo List</h2>
              <p className="text-center text-muted">ทั้งหมด 3 งาน</p>

              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
              <TaskInput />

              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isDone={task.isDone}
                />
              ))}
            </div>
          </main>

          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
          <Footer
            year="2025"
            fullName="Nuttachai Surathong"
            studentId="680610671"
          />
        </div>
      </div>
    </div>
  );
}
