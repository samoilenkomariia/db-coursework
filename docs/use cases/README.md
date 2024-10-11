# Модель прецедентів

## Загальна схема

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>
   
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
</center>

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

## Сценарії використання

| ID | <span id=BlockProject>`BlockProject`</span> |
| :--- | :--- |
| Назва: | Заблокувати проєкт |
| Учасники: | Адміністратор системи, система |
| Передумови: | - Адміністратор системи авторизований <br> - Проєкт активний <br> - Проєкт порушує умови використання |
| Результат: | Заблокований проєкт |
| Виключні ситуації: | - <font color="red">CancelException</font>: Адміністратор скасував операцію блокування |

@startuml
      
      |Адміністратор системи|
      start
      :Адміністратор відкриває проєкт;
      |Система|
      :Система перенаправляє адміністратора\nна сторінку проєкту;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Керування проєктом";
      |Система|
      :Система перенаправляє адміністратора\nна сторінку керування проєктом;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Заблокувати";
      |Система|
      :Система відображає вікно зі спадним меню\nвибору причини блокування та кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
         * Може виникнути
         <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Адміністратор обирає причину\nблокування та натискає кнопку\n“Підтвердити”;
      |Система|
      :Система змінює стан проєкту на\n“Заблокований”;
      :Система сповіщає адміністратора\nпро блокування проєкту;
      :Система сповіщає керівника команди\nпро блокування проєкту;
      stop
    
@enduml

---

| ID | <span id=UnblockProject>`UnblockProject`</span> |
| :--- | :--- |
| Назва: | Розблокувати проєкт |
| Учасники: | Адміністратор системи, система |
| Передумови: | - Адміністратор системи авторизований <br> - Проєкт заблокований |
| Результат: | Розблокований проєкт |
| Виключні ситуації: | - <font color="red">CancelException</font>: Адміністратор скасував операцію розблокування |

@startuml

      |Адміністратор системи|
      start
      :Адміністратор відкриває проєкт;
      |Система|
      :Система перенаправляє адміністратора\nна сторінку проєкту;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Керування проєктом";
      |Система|
      :Система перенаправляє адміністратора\nна сторінку керування проєктом;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Розблокувати";
      |Система|
      :Система відображає вікно з кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
        * Може виникнути
        <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n“Підтвердити”;
      |Система|
      :Система змінює стан проєкту на\n“Активний”;
      :Система сповіщає адміністратора\nпро розблокування проєкту;
      :Система сповіщає керівника команди\nпро розблокування проєкту;
      stop

@enduml

---

| ID | <span id=BanUser>`BanUser`</span> |
| :--- | :--- |
| Назва: | Заблокувати обліковий запис користувача |
| Учасники: | Адміністратор системи, система |
| Передумови: | - Адміністратор системи авторизований <br> - Обліковий запис користувача активний <br> - Користувач порушує умови використання|
| Результат: | Заблокований обліковий запис користувач |
| Виключні ситуації: | - <font color="red">CancelException</font>: Адміністратор скасував операцію блокування |

@startuml
      
      |Адміністратор системи|
      start
      :Адміністратор натискає кнопку\n"Панель адміністратора";
      |Система|
      :Система перенаправляє адміністратора\nна сторінку керування системою;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Активні користувачі";
      |Система|
      :Система відображає перелік\nактивних користувачів;
      |Адміністратор системи|
      :Адміністратор відкриває меню\nдій над користувачем;
      |Система|
      :Система відображає меню\nдій над користувачем;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Заблокувати";
      |Система|
      :Система відображає вікно зі спадним меню\nвибору причини блокування та кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
        * Може виникнути
        <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Адміністратор обирає причину\nблокування та натискає кнопку\n“Підтвердити”;
      |Система|
      :Система змінює стан облікового запису\nкористувача на “Заблокований”;
      :Система сповіщає адміністратора\nпро блокування користувача;
      :Система сповіщає користувача\nпро блокування його облікового запису;
      stop

@enduml

---

| ID | <span id=UnbanUser>`UnbanUser`</span> |
| :--- | :--- |
| Назва: | Розблокувати користувача |
| Учасники: | Адміністратор системи, система |
| Передумови: | - Адміністратор системи авторизований <br> - Обліковий запис користувача заблокований |
| Результат: | Розблокований обліковий запис користувача |
| Виключні ситуації: | - <font color="red">CancelException</font>: Адміністратор скасував операцію розблокування |

@startuml
    
      |Адміністратор системи|
      start
      :Адміністратор натискає кнопку\n"Панель адміністратора";
      |Система|
      :Система перенаправляє адміністратора\nна сторінку керування системою;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Заблоковані користувачі";
      |Система|
      :Система відображає перелік\nзаблокованих користувачів;
      |Адміністратор системи|
      :Адміністратор відкриває меню\nдій над користувачем;
      |Система|
      :Система відображає меню\nдій над користувачем;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Розблокувати";
      |Система|
      :Система відображає вікно з кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
        * Може виникнути
        <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n“Підтвердити”;
      |Система|
      :Система змінює стан облікового запису\nкористувача на “Активний”;
      :Система сповіщає адміністратора\nпро розблокування користувача;
      :Система сповіщає користувача\nпро розблокування його облікового запису;
      stop

@enduml

---

| ID | <span id=UserSupport>`UserSupport`</span> |
| :--- | :--- |
| Назва: | Отримати користувацьку підтримку |
| Учасники: | Користувач (керівник команди, працівник команди), адміністратор системи, система |
| Передумови: | - Користувач авторизований <br> - Користувач хоче звернутися до користувацької підтримки |
| Результат: | Оброблене звернення користувача |
| Виключні ситуації: | - <font color="red">InvalidFileException</font>: користувач приклав завеликий файл або файл з некоректним розширенням |

@startuml
    
      |Користувач|
      start
      :Користувач натискає кнопку\n"Користувацька підтримка";
      |Система|
      :Система перенаправляє користувача\nна сторінку створення звернення;
      |Користувач|
      :Користувач вводить тему,\nопис звернення та\nприкладає зображення;
      note right #lightcoral
        * Може виникнути
        <b>InvalidDataException</b>
        * Може виникнути
        <b>InvalidFileException</b>
      end note
      |Система|
      :Система надсилає звернення до\nскриньки підтримки адміністратора;
      :Система сповіщає адміністратора\nпро звернення користувача;
      :Система сповіщає користувача\nпро nстворення звернення;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Панель адміністратора";
      |Система|
      :Система перенаправляє адміністратора\nна сторінку керування системою;
      |Адміністратор системи|
      :Адміністратор натискає кнопку\n"Скринька звернень користувачів";
      |Система|
      :Система відображає скриньку\nзвернень користувачів;
      |Адміністратор системи|
      :Адміністратор обробляє\nзвернення користувача;
      stop

@enduml

---
