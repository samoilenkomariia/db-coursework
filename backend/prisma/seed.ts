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
      { name: 'ADMINISTRATOR', description: 'Has full access' },
      { name: 'MANAGER', description: 'Manages projects and teams' },
      { name: 'WORKER', description: 'Works on tasks' },
    ],
  });

  // Seed Grants for each role
  const grants = await prisma.grant.createMany({
    data: [
      // Grants for Administrator
      { roleId: 1, permissionId: 1 },
      { roleId: 1, permissionId: 2 },
      { roleId: 1, permissionId: 3 },
      { roleId: 1, permissionId: 4 },
      { roleId: 1, permissionId: 5 },
      { roleId: 1, permissionId: 6 },
      { roleId: 1, permissionId: 7 },
      { roleId: 1, permissionId: 8 },
      { roleId: 1, permissionId: 9 },
      { roleId: 1, permissionId: 10 },
      { roleId: 1, permissionId: 11 },
      { roleId: 1, permissionId: 12 },
      { roleId: 1, permissionId: 13 },
      { roleId: 1, permissionId: 14 },

      // Grants for Manager
      { roleId: 2, permissionId: 2 },
      { roleId: 2, permissionId: 4 },
      { roleId: 2, permissionId: 5 },
      { roleId: 2, permissionId: 6 },
      { roleId: 2, permissionId: 7 },
      { roleId: 2, permissionId: 8 },
      { roleId: 2, permissionId: 9 },
      { roleId: 2, permissionId: 10 },
      { roleId: 2, permissionId: 11 },
      { roleId: 2, permissionId: 12 },

      // Grants for Worker
      { roleId: 3, permissionId: 5 },
      { roleId: 3, permissionId: 6 },
      { roleId: 3, permissionId: 7 },
      { roleId: 3, permissionId: 8 },
      { roleId: 3, permissionId: 9 },
    ],
  });

  // Insert Users
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'Ivan Shevchenko',
        email: 'ivan.shevchenko@example.com',
        password: 'hashed_password_1',
        profilePicture: 'https://example.com/profile1.jpg',
        status: 'NOT_BANNED',
      },
      {
        name: 'Olga Ivanova',
        email: 'olga.ivanova@example.com',
        password: 'hashed_password_2',
        profilePicture: 'https://example.com/profile2.jpg',
        status: 'NOT_BANNED',
      },
      {
        name: 'Natalia Kovalenko',
        email: 'natalia.kovalenko@example.com',
        password: 'hashed_password_3',
        profilePicture: null,
        status: 'NOT_BANNED',
      },
      {
        name: 'Mykola Petrov',
        email: 'mykola.petrov@example.com',
        password: 'hashed_password_4',
        profilePicture: 'https://example.com/profile4.jpg',
        status: 'NOT_BANNED',
      },
      {
        name: 'Daryna Tarasenko',
        email: 'daryna.tarasenko@example.com',
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
      { userId: 1, projectId, roleId: 1 },
      { userId: 2, projectId, roleId: 2 },
      { userId: 3, projectId, roleId: 3 },
      { userId: 4, projectId, roleId: 3 },
      { userId: 5, projectId, roleId: 3 },
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
      { memberId: 1, taskId: task.id },
      { memberId: 2, taskId: task.id },
      { memberId: 3, taskId: task.id },
      { memberId: 4, taskId: task.id },
      { memberId: 5, taskId: task.id },
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

// -- Insert Permissions
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

// -- Insert Roles
// INSERT INTO Role (`name`, `description`)
// VALUES
//   ('ADMINISTRATOR', 'Has full access'),
//   ('MANAGER', 'Manages projects and teams'),
//   ('WORKER', 'Works on tasks');

// -- Insert Grants
// INSERT INTO `grant` (roleId, permissionId)
// VALUES
//   -- Grants for Administrator
//   (1, 1),  -- CREATE_PROJECT
//   (1, 2),  -- UPDATE_PROJECT
//   (1, 3),  -- DELETE_PROJECTgrant
//   (1, 4),  -- CREATE_TASK
//   (1, 5),  -- UPDATE_TASK
//   (1, 6),  -- DELETE_TASK
//   (1, 7),  -- CREATE_COMMENT
//   (1, 8),  -- UPDATE_COMMENT
//   (1, 9),  -- DELETE_COMMENT
//   (1, 10), -- CREATE_MEMBER
//   (1, 11), -- UPDATE_MEMBER
//   (1, 12), -- DELETE_MEMBER
//   (1, 13), -- BAN_USER
//   (1, 14), -- UNBAN_USER

//   -- Grants for Manager
//   (2, 2),  -- UPDATE_PROJECT
//   (2, 4),  -- CREATE_TASK
//   (2, 5),  -- UPDATE_TASK
//   (2, 6),  -- DELETE_TASK
//   (2, 7),  -- CREATE_COMMENT
//   (2, 8),  -- UPDATE_COMMENT
//   (2, 9),  -- DELETE_COMMENT
//   (2, 10), -- CREATE_MEMBER
//   (2, 11), -- UPDATE_MEMBER
//   (2, 12), -- DELETE_MEMBER

//   -- Grants for Worker
//   (3, 5),  -- UPDATE_TASK
//   (3, 6),  -- DELETE_TASK
//   (3, 7),  -- CREATE_COMMENT
//   (3, 8),  -- UPDATE_COMMENT
//   (3, 9);  -- DELETE_COMMENT

// -- Insert Users
// INSERT INTO User (`name`, `email`, `password`, `profilePicture`, `status`)
// VALUES
//   ('Ivan Shevchenko', 'ivan.shevchenko@example.com', 'hashed_password_1', 'https://example.com/profile1.jpg', 'NOT_BANNED'),
//   ('Olga Ivanova', 'olga.ivanova@example.com', 'hashed_password_2', 'https://example.com/profile2.jpg', 'NOT_BANNED'),
//   ('Natalia Kovalenko', 'natalia.kovalenko@example.com', 'hashed_password_3', NULL, 'NOT_BANNED'),
//   ('Mykola Petrov', 'mykola.petrov@example.com', 'hashed_password_4', 'https://example.com/profile4.jpg', 'NOT_BANNED'),
//   ('Daryna Tarasenko', 'daryna.tarasenko@example.com', 'hashed_password_5', 'https://example.com/profile5.jpg', 'NOT_BANNED');

// -- Insert Project
// INSERT INTO Project (`name`, `description`, `creationDate`, `status`)
// VALUES
//   ('Project Alpha', 'A description for Project Alpha', '2024-11-01 00:00:00', 'ACTIVE');

// -- Insert Members
// INSERT INTO Member (`userId`, `projectId`, `roleId`)
// VALUES
//   (1, 1, 1),
//   (2, 1, 2),
//   (3, 1, 3),
//   (4, 1, 3),
//   (5, 1, 3);

// -- Insert Tasks
// INSERT INTO Task (`name`, `status`, `description`, `startDate`, `dueDate`, `projectId`)
// VALUES
//   ('Task 1', 'OPEN', 'Task 1 description', '2024-11-01 09:00:00', '2024-11-10 18:00:00', 1);

// -- Insert Task Comments
// INSERT INTO TaskComment (`content`, `creationDate`, `taskId`, `authorId`)
// VALUES
//   ('This is the first comment on Task 1', '2024-11-01 10:00:00', 1, 1);

// -- Insert Tags
// INSERT INTO Tag (`name`, `color`)
// VALUES
//   ('Backend', '#FF5733'),   -- Red
//   ('Frontend', '#33C1FF'),  -- Blue
//   ('Testing', '#FF9800');   -- Orange

// -- Insert Task Tags
// INSERT INTO TasksTag (`taskId`, `tagId`)
// VALUES
//   (1, 1);  -- Task 1 tagged with Backend

// -- Insert Assignees
// INSERT INTO Assignee (`memberId`, `taskId`)
// VALUES
//   (1, 1),
//   (2, 1),
//   (3, 1),
//   (4, 1),
//   (5, 1);
