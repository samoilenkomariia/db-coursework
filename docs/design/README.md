# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема





@startuml

entity Member {
    id: number
  }

  entity Assignee {
    id: number
  }

package UserManagement {
  entity User {
    id: number
    name: text
    email: text
    password: text
    avatar: image
    status: text
  }
}

package ProjectManagement {
  entity Project {
    id: number
    name: text
    description: text
    creationDate: date
    status: text
  }
}

package TaskManagement {
  entity Task {
    id: number
    name: text
    status: text
    description: text
    startDate: date
    deadline: date
  }

  entity TaskComment {
    id: number
    content: text
    datetime: datetime
  }

  entity Attachment {
    id: number
    fileName: text
    fileType: text
    fileSize: text
  }

  entity Tag {
    id: number
    name: text
  }

  entity Label {
    id: number
    name: text
  }
}

package PermissionManagement {
  entity Role {
    id: number
    name: text
    description: text
  }

  entity Grant {
  }

  entity Permission {
    id: number
    name: text
  }

  Administrator .u.> Role : instanceOf
  Manager .u.> Role : instanceOf
  Worker .u.> Role : instanceOf
}


User "1,1" -- "0,*" Member
Member "0,*" --d "1,1" Role
Member "0,*" -- "1,1" Project
Member "1,1" --r "0,*" Assignee
Task "1,1" --u "0,*" Assignee
Task "0,*" --u "1,1" Project

TaskComment "0,*" --u "1,1" Task
Attachment "0,*" --r "1,1" Task
Label "0,*" --u "1,1" Task
Tag "1,1" --u "0,*" Label
Role "1,1" -- "0,*" Grant

Grant "0,*" -- "1,1" Permission
@enduml
