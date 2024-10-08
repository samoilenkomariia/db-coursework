# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проєкті та дати посилання на них.

_Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів._

Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/).

В markdown-файлі використовується опис діаграми

```md
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa

    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }

    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2

    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }

    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3



    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends


    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa

    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }

    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2

    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }

    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3



    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends


    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>

## Загальна схема

@startuml
actor "Працівник команди" as TeamWorker
actor "Керівник команди" as TeamLead
actor "Адміністратор системи" as Admin

TeamLead --u-|> TeamWorker
Admin --u-|> TeamLead

usecase "<b>ManageAccount</b>\nКерувати власним обліковим записом" as ManageAccount
usecase "<b>GetUserSupport</b>\nОтримати користувацьку підтримку" as GetUserSupport
usecase "<b>ManageOwnTasks</b>\nКерувати своїми завданнями" as ManageOwnTasks

usecase "<b>ManageProjects</b>\nКерувати проєктами" as ManageProjects
usecase "<b>ManageTeam</b>\nКерувати командою" as ManageTeam
usecase "<b>TrackTeamWork</b>\nВідстежувати роботу команди" as TrackTeamWork
usecase "<b>ManageTasks</b>\nКерувати завданнями" as ManageTasks

usecase "<b>MonitorUserActivity</b>\nМоніторити активність користувачів" as MonitorUserActivity
usecase "<b>ManagePermissions</b>\nКерувати дозволами" as ManagePermissions
usecase "<b>UserSupport</b>\nВирішувати проблеми користувачів" as UserSupport

TeamWorker --> ManageAccount
TeamWorker --> GetUserSupport
TeamWorker --> ManageOwnTasks

TeamLead --> ManageProjects
TeamLead --> ManageTeam
TeamLead --> TrackTeamWork
TeamLead --> ManageTasks

Admin --> MonitorUserActivity
Admin --> ManagePermissions
Admin --> UserSupport
@enduml

## Працівник команди

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam noteFontColor white

actor "Працівник команди" as TeamWorker

usecase "<b>ManageAccount</b>\nКерувати власним обліковим записом" as ManageAccount
usecase "<b>ManageOwnTasks</b>\nКерувати власними завданнями" as ManageOwnTasks
usecase "<b>GetUserSupport</b>\nОтримати користувацьку підтримку" as GetUserSupport

usecase "<b>CreateAccount</b>\nСтворити обліковий запис" as CreateAccount
usecase "<b>LogIntoAccount</b>\nУвійти в обліковий запис" as LogIntoAccount
usecase "<b>EditProfile</b>\nРедагувати профіль" as EditProfile
usecase "<b>DeleteProfile</b>\nВидалити профіль" as DeleteProfile

usecase "<b>EditTask</b>\nРедагувати завдання" as EditTask
usecase "<b>DeleteTask</b>\nВидалити завдання" as DeleteTask
usecase "<b>CommentTask</b>\nДодати коментар до завдання" as CommentTask
usecase "<b>FilterTask</b>\nВідфільтрувати завдання" as FilterTask

TeamWorker -r-> ManageAccount
TeamWorker -l-> ManageOwnTasks
TeamWorker -u-> GetUserSupport

ManageAccount <.. CreateAccount : extends
ManageAccount <.. LogIntoAccount : extends
EditProfile ..> ManageAccount : extends
DeleteProfile ..> ManageAccount : extends

ManageOwnTasks <.. EditTask : extends
ManageOwnTasks <.. DeleteTask : extends
CommentTask ..> ManageOwnTasks : extends
FilterTask ..> ManageOwnTasks : extends
@enduml

</center>

## Керівник команди

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam noteFontColor white

actor "Керівник команди" as TeamLead

usecase "<b>ManageProjects</b>\nКерувати проєктами" as ManageProjects
usecase "<b>CreateProject</b>\nСтворити проєкт" as CreateProject
usecase "<b>DeleteProject</b>\nВидалити проєкт" as DeleteProject
usecase "<b>EditProject</b>\nРедагувати проєкт" as EditProject
usecase "<b>AddUserToProject</b>\nДодати користувача до проєкту" as AddUserToProject
usecase "<b>RemoveUserFromProject</b>\nВидалити користувача з проєкту" as RemoveUserFromProject

usecase "<b>ManageTasks</b>\nКерувати завданнями" as ManageTasks
usecase "<b>CreateTask</b>\nСтворити завдання" as CreateTask
usecase "<b>DeleteTask</b>\nВидалити завдання" as DeleteTask
usecase "<b>SetAssigneeToTask</b>\nПризначити виконавця до завдання" as SetAssigneeToTask
usecase "<b>SetDeadline</b>\nПоставити дедлайн" as SetDeadline

usecase "<b>ManageTeam</b>\nКерувати командою" as ManageTeam
usecase "<b>TrackTeamWork</b>\nВідстежувати роботу команди" as TrackTeamWork

TeamLead -l-> ManageProjects
TeamLead -d-> ManageTasks
TeamLead -r-> ManageTeam
TeamLead -u-> TrackTeamWork

CreateProject ..> ManageProjects : extends
ManageProjects <.. DeleteProject : extends
ManageProjects <.. EditProject : extends

AddUserToProject ..> ManageTeam : extends
ManageTeam <.. RemoveUserFromProject : extends

ManageTasks <.. SetAssigneeToTask : extends
ManageTasks <.. CreateTask : extends
ManageTasks <.. DeleteTask : extends
ManageTasks <.. SetDeadline : extends

@enduml

</center>

## Адміністратор

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam noteFontColor white

actor "Адміністратор системи" as Admin

usecase "<b>MonitorUserActivity</b>\nМоніторити активність користувачів" as MonitorUserActivity
usecase "<b>ManagePermissions</b>\nКерувати дозволами" as ManagePermissions
usecase "<b>UserSupport</b>\nВирішувати проблеми користувачів" as UserSupport

usecase "<b>BlockUser</b>\nЗаблокувати користувача" as BlockUser
usecase "<b>UnblockUser</b>\nРозблокувати користувача" as UnblockUser
usecase "<b>BlockProject</b>\nЗаблокувати проєкт" as BlockProject
usecase "<b>UnblockProject</b>\nРозблокувати проєкт" as UnblockProject

Admin -r-> MonitorUserActivity
Admin -d-> ManagePermissions
Admin -l-> UserSupport

ManagePermissions <.. BlockUser : extends
ManagePermissions <.. UnblockUser : extends
ManagePermissions <.. BlockProject : extends
ManagePermissions <.. UnblockProject : extends

@enduml

</center>

<!-- а ви працюєте тут -->
