const employees = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "password": "alice1234",
    "tasks": [
      {
        "title": "Design Homepage",
        "description": "Create a user-friendly design for the homepage.",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed_task": false,
        "failed": false,
        "task_date": "2024-12-10"
      },
      {
        "title": "Update Portfolio",
        "description": "Add new projects to the company's portfolio.",
        "category": "Content Creation",
        "active": false,
        "new_task": false,
        "completed_task": true,
        "failed": false,
        "task_date": "2024-12-05"
      },
      {
        "title": "Research Tools",
        "description": "Find tools to improve design workflows.",
        "category": "Research",
        "active": false,
        "new_task": false,
        "completed_task": false,
        "failed": true,
        "task_date": "2024-12-08"
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 1,
      "completed_task": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "name": "Brian Miller",
    "email": "brian.miller@example.com",
    "password": "brian5678",
    "tasks": [
      {
        "title": "Bug Fix #342",
        "description": "Resolve the issue in the authentication module.",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed_task": false,
        "failed": false,
        "task_date": "2024-12-12"
      },
      {
        "title": "Database Cleanup",
        "description": "Remove outdated records from the database.",
        "category": "Database",
        "active": false,
        "new_task": false,
        "completed_task": true,
        "failed": false,
        "task_date": "2024-12-06"
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from junior developers.",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed_task": false,
        "failed": true,
        "task_date": "2024-12-08"
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 1,
      "completed_task": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "name": "Clara Davis",
    "email": "clara.davis@example.com",
    "password": "clara9876",
    "tasks": [
      {
        "title": "Campaign Plan",
        "description": "Create a detailed plan for the holiday marketing campaign.",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed_task": false,
        "failed": false,
        "task_date": "2024-12-10"
      },
      {
        "title": "Client Feedback",
        "description": "Collect feedback from clients on recent campaigns.",
        "category": "Client Relations",
        "active": false,
        "new_task": false,
        "completed_task": true,
        "failed": false,
        "task_date": "2024-12-04"
      },
      {
        "title": "Competitor Analysis",
        "description": "Analyze marketing strategies of competitors.",
        "category": "Research",
        "active": false,
        "new_task": false,
        "completed_task": false,
        "failed": true,
        "task_date": "2024-12-07"
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 1,
      "completed_task": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "name": "David Smith",
    "email": "david.smith@example.com",
    "password": "david4321",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify stock levels in the warehouse.",
        "category": "Inventory",
        "active": true,
        "new_task": false,
        "completed_task": false,
        "failed": false,
        "task_date": "2024-12-10"
      },
      {
        "title": "Training Session",
        "description": "Conduct training for new hires.",
        "category": "HR",
        "active": false,
        "new_task": false,
        "completed_task": true,
        "failed": false,
        "task_date": "2024-12-05"
      },
      {
        "title": "Vendor Negotiation",
        "description": "Negotiate contract terms with new vendors.",
        "category": "Logistics",
        "active": false,
        "new_task": false,
        "completed_task": false,
        "failed": true,
        "task_date": "2024-12-07"
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 0,
      "completed_task": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "name": "Emma Brown",
    "email": "emma.brown@example.com",
    "password": "emma2468",
    "tasks": [
      {
        "title": "System Update",
        "description": "Update company systems to the latest version.",
        "category": "IT",
        "active": true,
        "new_task": false,
        "completed_task": false,
        "failed": false,
        "task_date": "2024-12-12"
      },
      {
        "title": "Backup Data",
        "description": "Perform a backup of all company data.",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed_task": true,
        "failed": false,
        "task_date": "2024-12-06"
      },
      {
        "title": "Incident Report",
        "description": "Prepare a report on the recent server outage.",
        "category": "IT",
        "active": false,
        "new_task": true,
        "completed_task": false,
        "failed": true,
        "task_date": "2024-12-08"
      }
    ],
    "task_numbers": {
      "active": 1,
      "new_task": 1,
      "completed_task": 1,
      "failed": 1
    }
  }
];


  const admin = [
    {
       "id" : "1",
       "name": "Admin",
       "email" : "admin@gmail.com",
       "password" : "123"
    }
  ];

  export const setLocalstorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees)); 
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')); 
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
};