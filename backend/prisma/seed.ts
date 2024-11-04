import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Insert Permissions
  await prisma.permission.createMany({
    data: [
      { name: 'CREATE_PROJECT' },
      { name: 'UPDATE_PROJECT' },
      { name: 'DELETE_PROJECT' },
      { name: 'CREATE_TASK' },
      { name: 'UPDATE_TASK' },
      { name: 'DELETE_TASK' },
      { name: 'CREATE_COMMENT' },
      { name: 'UPDATE_COMMENT' },
      { name: 'DELETE_COMMENT' },
      { name: 'CREATE_MEMBER' },
      { name: 'UPDATE_MEMBER' },
      { name: 'DELETE_MEMBER' },
      { name: 'BAN_USER' },
      { name: 'UNBAN_USER' },
    ],
  });

  // Insert Roles
  await prisma.role.createMany({
    data: [
      { name: 'Administrator', description: 'Has full access' },
      { name: 'Manager', description: 'Manages projects and teams' },
      { name: 'Worker', description: 'Works on tasks' },
    ],
  });

  // Insert Users
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'hashed_password_1',
        profilePicture: 'https://example.com/profile1.jpg',
        status: 'NOT_BANNED',
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'hashed_password_2',
        profilePicture: 'https://example.com/profile2.jpg',
        status: 'NOT_BANNED',
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'hashed_password_3',
        profilePicture: null,
        status: 'NOT_BANNED',
      },
      {
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: 'hashed_password_4',
        profilePicture: 'https://example.com/profile4.jpg',
        status: 'NOT_BANNED',
      },
      {
        name: 'Charlie White',
        email: 'charlie.white@example.com',
        password: 'hashed_password_5',
        profilePicture: 'https://example.com/profile5.jpg',
        status: 'NOT_BANNED',
      },
    ],
  });

  // Insert Project
  const project = await prisma.project.create({
    data: {
      name: 'Project Alpha',
      description: 'A description for Project Alpha',
      creationDate: new Date('2024-11-01T00:00:00'),
      status: 'ACTIVE',
    },
  });

  // Insert Members
  const projectId = project.id;
  await prisma.member.createMany({
    data: [
      { userId: 1, projectId, roleId: 1 }, // John Doe - Administrator
      { userId: 2, projectId, roleId: 2 }, // Jane Smith - Manager
      { userId: 3, projectId, roleId: 3 }, // Alice Johnson - Worker
      { userId: 4, projectId, roleId: 3 }, // Bob Brown - Worker
      { userId: 5, projectId, roleId: 3 }, // Charlie White - Worker
    ],
  });

  // Insert Tasks
  const task = await prisma.task.create({
    data: {
      name: 'Task 1',
      status: 'OPEN',
      description: 'Task 1 description',
      startDate: new Date('2024-11-01T09:00:00'),
      dueDate: new Date('2024-11-10T18:00:00'),
      projectId: project.id,
    },
  });

  // Insert Task Comments
  await prisma.taskComment.create({
    data: {
      content: 'This is the first comment on Task 1',
      creationDate: new Date('2024-11-01T10:00:00'),
      taskId: task.id,
      authorId: 1,
    },
  });

  // Insert Tags
  await prisma.tag.createMany({
    data: [
      { name: 'Backend', color: '#FF5733' },
      { name: 'Frontend', color: '#33C1FF' },
      { name: 'Testing', color: '#FF9800' },
    ],
  });

  // Retrieve Tags
  const tags = await prisma.tag.findMany();
  const backendTag = tags.find((tag) => tag.name === 'Backend');
  await prisma.tasksTag.create({
    data: {
      taskId: task.id,
      tagId: backendTag.id,
    },
  });

  // Insert Assignees
  await prisma.assignee.createMany({
    data: [
      { userId: 1, taskId: task.id },
      { userId: 2, taskId: task.id },
      { userId: 3, taskId: task.id },
      { userId: 4, taskId: task.id },
      { userId: 5, taskId: task.id },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// it is equal to the following SQL query:

// -- Insert Permissions into Permission table
// INSERT INTO Permission (`name`)
// VALUES
//   ('CREATE_PROJECT'),
//   ('UPDATE_PROJECT'),
//   ('DELETE_PROJECT'),
//   ('CREATE_TASK'),
//   ('UPDATE_TASK'),
//   ('DELETE_TASK'),
//   ('CREATE_COMMENT'),
//   ('UPDATE_COMMENT'),
//   ('DELETE_COMMENT'),
//   ('CREATE_MEMBER'),
//   ('UPDATE_MEMBER'),
//   ('DELETE_MEMBER'),
//   ('BAN_USER'),
//   ('UNBAN_USER');

// -- Insert Roles into Role table
// INSERT INTO Role (`name`, `description`)
// VALUES
//   ('Administrator', 'Has full access'),
//   ('Manager', 'Manages projects and teams'),
//   ('Worker', 'Works on tasks');

// -- Insert Grants into Grant table
// INSERT INTO `grant` (`role_id`, `permission_id`)
// VALUES
//   -- Grants for Administrator
//   (1, 1),  (1, 2),  (1, 3),  (1, 4),
//   (1, 5),  (1, 6),  (1, 7),  (1, 8),
//   (1, 9),  (1, 10), (1, 11), (1, 12),
//   (1, 13), (1, 14), (1, 15), (1, 16),
//   (1, 17), (1, 18), (1, 19),

//   -- Grants for Manager
//   (2, 2),  (2, 5),  (2, 6),  (2, 7),
//   (2, 9),  (2, 10), (2, 11), (2, 12),

//   -- Grants for Worker
//   (3, 2),  (3, 5),  (3, 6),  (3, 9),
//   (3, 10), (3, 11);

// -- Insert Users into User table (5 users, 3 workers)
// INSERT INTO User (`name`, `email`, `password`, `profilePicture`, `status`)
// VALUES
//   ('John Doe', 'john.doe@example.com', 'hashed_password_1', 'https://example.com/profile1.jpg', 'NOT_BANNED'),
//   ('Jane Smith', 'jane.smith@example.com', 'hashed_password_2', 'https://example.com/profile2.jpg', 'NOT_BANNED'),
//   ('Alice Johnson', 'alice.johnson@example.com', 'hashed_password_3', NULL, 'NOT_BANNED'),
//   ('Bob Brown', 'bob.brown@example.com', 'hashed_password_4', 'https://example.com/profile4.jpg', 'NOT_BANNED'),
//   ('Charlie White', 'charlie.white@example.com', 'hashed_password_5', 'https://example.com/profile5.jpg', 'NOT_BANNED');

// -- Insert Project into Project table (Only one project)
// INSERT INTO Project (`name`, `description`, `creationDate`, `status`)
// VALUES
//   ('Project Alpha', 'A description for Project Alpha', '2024-11-01 00:00:00', 'ACTIVE');

// -- Insert Members into Member table (Each user gets a role)
// INSERT INTO Member (`userId`, `projectId`, `role_id`)
// VALUES
//   (1, 1, 1),  -- John Doe is an Administrator in Project Alpha
//   (2, 1, 2),  -- Jane Smith is a Manager in Project Alpha
//   (3, 1, 3),  -- Alice Johnson is a Worker in Project Alpha
//   (4, 1, 3),  -- Bob Brown is a Worker in Project Alpha
//   (5, 1, 3);  -- Charlie White is a Worker in Project Alpha

// -- Insert Tasks into Task table (One task for demonstration)
// INSERT INTO Task (`name`, `status`, `description`, `startDate`, `dueDate`, `projectId`)
// VALUES
//   ('Task 1', 'OPEN', 'Task 1 description', '2024-11-01 09:00:00', '2024-11-10 18:00:00', 1);

// -- Insert Task Comments into TaskComment table (One comment for the task)
// INSERT INTO TaskComment (`content`, `creationDate`, `taskId`, `authorId`)
// VALUES
//   ('This is the first comment on Task 1', '2024-11-01 10:00:00', 1, 1);

// -- Insert Tags into Tag table (3 tags)
// INSERT INTO Tag (`name`, `color`)
// VALUES
//   ('Backend', '#FF5733'),   -- Red
//   ('Frontend', '#33C1FF'),  -- Blue
//   ('Testing', '#FF9800');   -- Orange

// -- Insert TasksTags into TasksTag table (Assign one tag to Task 1)
// INSERT INTO TasksTag (`taskId`, `tagId`)
// VALUES
//   (1, 1);  -- Task 1 is tagged with Backend

// -- Insert Assignees into Assignee table (Assign users to the task)
// INSERT INTO Assignee (`userId`, `taskId`)
// VALUES
//   (1, 1),  -- John Doe is assigned to Task 1
//   (2, 1),  -- Jane Smith is assigned to Task 1
//   (3, 1),  -- Alice Johnson is assigned to Task 1
//   (4, 1),  -- Bob Brown is assigned to Task 1
//   (5, 1);  -- Charlie White is assigned to Task 1
