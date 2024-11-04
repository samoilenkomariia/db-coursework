import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Roles
  await prisma.role.createMany({
    data: [
      {
        name: 'Administrator',
        description: 'Has full access',
      },
      {
        name: 'Manager',
        description: 'Manages projects and teams',
      },
      {
        name: 'Worker',
        description: 'Works on tasks',
      },
    ],
  });

  // Create Tags with Hexadecimal Color Codes
  await prisma.tag.createMany({
    data: [
      { name: 'Backend', color: '#FF5733' }, // Red
      { name: 'Frontend', color: '#33C1FF' }, // Blue
      { name: 'Database', color: '#4CAF50' }, // Green
      { name: 'API', color: '#FFC300' }, // Yellow
      { name: 'UI/UX', color: '#9C27B0' }, // Purple
      { name: 'Testing', color: '#FF9800' }, // Orange
      { name: 'Deployment', color: '#00BCD4' }, // Cyan
    ],
  });

  console.log('Seeding completed');
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
// INSERT INTO Role (name, description) VALUES
// ('Administrator', 'Has full access'),
// ('Manager', 'Manages projects and teams'),
// ('Worker', 'Works on tasks');

// -- Create Tags with Hexadecimal Color Codes
// INSERT INTO Tag (name, color) VALUES
// ('Backend', '#FF5733'),   -- Red
// ('Frontend', '#33C1FF'),  -- Blue
// ('Database', '#4CAF50'),  -- Green
// ('API', '#FFC300'),       -- Yellow
// ('UI/UX', '#9C27B0'),     -- Purple
// ('Testing', '#FF9800'),   -- Orange
// ('Deployment', '#00BCD4'); -- Cyan

// -- Optionally, confirm insertion of roles and tags
// SELECT 'Roles and Tags Seeding Completed' AS message;
