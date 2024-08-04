import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="w-full mb-4 text-3xl font-semibold text-center text-purple-600">
        Help
      </h1>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-2 text-lg font-semibold text-purple-600">
          Frequently Asked Questions
        </h2>
        <div className="mb-2">
          <h3 className="font-semibold text-purple-600 text-md">
            How do I use the Todo App?
          </h3>
          <p className="text-purple-600">
            To use the Todo App, start by adding tasks you need to complete. You
            can add, edit, or delete tasks. Once a task is completed, mark it as
            done.
          </p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-purple-600 text-md">
            How do I prioritize tasks?
          </h3>
          <p className="text-purple-600">
            You can prioritize tasks by setting due dates or using labels.
            Simply click on a task to edit its details.
          </p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-purple-600 text-md">
            Can I share tasks with others?
          </h3>
          <p className="text-purple-600">
            Currently, the app doesn't support task sharing. However, you can
            share the task details with others manually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
