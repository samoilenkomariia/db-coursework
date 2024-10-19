# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема





@startuml
entity Project #14f749
entity Project.id
entity Project.name
entity Project.description
entity Project.creationDate
entity Project.status

Project.id --* Project
Project.name --* Project
Project.description --* Project
Project.creationDate --* Project
Project.status --* Project



entity Task #14f749

entity TaskComment#14f749
entity Attachment#14f749
entity Label#14f749
entity Tag#14f749

Task "1,1" -d- "0,*" Attachment
Task "1,1" -d- "0,*" TaskComment
Task "1,1" -d- "0,*" Label
Tag "1,1" -u- "0,*" Label

entity Task.id
entity Task.name
entity Task.status
entity Task.description
entity Task.startDate
entity Task.deadline

Task.id --* Task
Task.name --* Task
Task.status --* Task
Task.description --* Task
Task.startDate --* Task
Task.deadline --* Task

entity TaskComment.id
entity TaskComment.content
entity TaskComment.datetime
TaskComment.id --* TaskComment
TaskComment.content --* TaskComment
TaskComment.datetime --* TaskComment

entity Attachment.id
entity Attachment.fileName
entity Attachment.fileType
entity Attachment.fileSize
Attachment.id -u-* Attachment
Attachment.fileName -u-* Attachment
Attachment.fileType -u-* Attachment
Attachment.fileSize -u-* Attachment

entity Tag.id
entity Tag.name
Tag.id -u-* Tag
Tag.name -u-* Tag



entity Role #14f749
entity Grant #14f749
entity Permission #14f749

Role "1,1" -d- "0,*" Grant
Grant "0,*" -d- "1,1" Permission

entity Role.id
entity Role.name
entity Role.description
Role.id -l-* Role
Role.name --* Role
Role.description --* Role

entity Permission.id
entity Permission.name
Permission.id -u-* Permission
Permission.name -u-* Permission



entity Member #14f749
entity Member.id
Member.id --* Member



entity Assignee #14f749
entity Assignee.id
Assignee.id -u-* Assignee



entity User #14f749
entity User.id
entity User.name
entity User.email
entity User.password
entity User.avatar
entity User.status

User.id -u-* User
User.name -u-* User
User.email -u-* User
User.password -u-* User
User.avatar -u-* User
User.status -u-* User



Task "0,*" -u- "1,1" Project
Member "0,*" -l- "1,1" Project
Member "0,*" -d- "1,1" User
Member "0,*" -r- "1,1" Role
Member "0,*" -l- "1,1" Assignee
Task "1,1" -r- "0,*" Assignee
@enduml
