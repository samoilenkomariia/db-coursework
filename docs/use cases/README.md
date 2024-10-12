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

---

| ID                 | <span id=CreateProject>`CreateProject`</span>                                                                                                                                                                                                                                                                                          |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Створити проєкт (Create Project)                                                                                                                                                                                                                                                                                                       |
| Учасники:          | Керівник команди, система                                                                                                                                                                                                                                                                                                              |
| Передумови:        | Керівник команди авторизований                                                                                                                                                                                                                                                                                                         |
| Результат:         | Створений новий проєкт                                                                                                                                                                                                                                                                                                                 |
| Виключні ситуації: | - <font color="red">InvalidDataException</font>: Керівник команди ввів некоректні дані                                                                                                                                                                    |


@startuml

    |Керівник команди|
    start
    :Переходить в розділ\nуправління проєктами;
    |Система|
    :Перенаправляє керівника команди\nна сторінку управління проєктами;
    |Керівник команди|
    :Натискає кнопку\n"Створити новий проєкт";
    |Система|
    :Відкриває форму з полями\nдля введеня даних;
    |Керівник команди|
    :Вводить необхідну інформацію\n(назву проєкту, опис, прикріпляє файли,\nдодає користувач до проєкту) ;
    :Натискає кнопку "Створити";
    |Система|
    :Перевіряє введені дані\nна валідність;
    note right #lightcoral
        * Може виникнути
        <b>InvalidDataException</b>
    end note
    :Створює новий проєкт;
    :Повідомляє керівника команди\nпро успішне створення проєкту;
    :Перенаправляє керівника команди\nна сторінку нового проєкту;
    stop

@enduml

---


| ID                 | <span id=EditProject>`EditProject`</span>                                                                                                                                                                                                    
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Назва:             | Редагувати проєкт (Edit Project)                                                                                                                                                                                                                                                                                                                                                                                             |
| Учасники:          | Керівник команди, система                                                                                                                                                                                                                                                                                                                                                                                                    |
| Передумови:        | Керівник команди авторизований                                                                                                                                                                                                                                                                                                                                                                                               |
| Результат:         | Оновлений проєкт                                                                                                                                                                                                                                                                                                                                                                                                             |
| Виключні ситуації: | - <font color="red">InvalidDataException</font>: Користувач ввів некоректні дані<br>- <font color="red">CancelException</font>: Користувач скасував підтвердження змін                                                                                                                                                                                                                                                                                        |

@startuml

    |Керівник команди|
    start
    :Відкриває необхідний проєкт;
    |Система|
    :Перенаправляє керівника команди\nна сторінку проєкту;
    |Керівник команди|
    :Натискає кнопку\n"Редагувати проєкт";
    |Система|
    :Перенаправляє керівника команди\n на сторінку редагування проєкту;
    |Керівник команди|
    :Змінює необхідні дані\n(назву, опис, вкладені файли);
    :Натискає кнопку\n "Зберегти зміни";
    |Система|
    :Перевіряє валідність\nвведених даних;
    note right #lightcoral
        * Може виникнути
        <b>InvalidDataException</b>
    end note
    :Відображає вікно з кнопками\n"Скасувати" і "Підвердити";
    note right #lightcoral
        * Може виникнути\n<b>CancelException</b>
    end note
    |Керівник команди|
    :Натискає кнопку\n "Підтвердити зміни";
    |Система|
    :Оновлює дані проєкту;
    :Повідомляє керівника команди\nпро успішне оновлення даних;
    :Перенаправляє керівника команди\nна сторінку оновленого проєкту;
    stop


@enduml

---

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
      :Відкриває проєкт;
      |Система|
      :Перенаправляє адміністратора\nна сторінку проєкту;
      |Адміністратор системи|
      :Натискає кнопку\n"Керування проєктом";
      |Система|
      :Перенаправляє адміністратора\nна сторінку керування проєктом;
      |Адміністратор системи|
      :Натискає кнопку\n"Заблокувати";
      |Система|
      :Відображає вікно зі спадним меню\nвибору причини блокування та кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
         * Може виникнути
         <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Обирає причину\nблокування та натискає кнопку\n“Підтвердити”;
      |Система|
      :Змінює стан проєкту на\n“Заблокований”;
      :Сповіщає адміністратора\nпро блокування проєкту;
      :Сповіщає керівника команди\nпро блокування проєкту;
      |Адміністратор системи|
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
      :Відкриває проєкт;
      |Система|
      :Перенаправляє адміністратора\nна сторінку проєкту;
      |Адміністратор системи|
      :Натискає кнопку\n"Керування проєктом";
      |Система|
      :Перенаправляє адміністратора\nна сторінку керування проєктом;
      |Адміністратор системи|
      :Натискає кнопку\n"Розблокувати";
      |Система|
      :Відображає вікно з кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
        * Може виникнути
        <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Натискає кнопку\n“Підтвердити”;
      |Система|
      :Змінює стан проєкту на\n“Активний”;
      :Сповіщає адміністратора\nпро розблокування проєкту;
      :Сповіщає керівника команди\nпро розблокування проєкту;
      |Адміністратор системи|
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
      :Натискає кнопку\n"Панель адміністратора";
      |Система|
      :Перенаправляє адміністратора\nна сторінку керування системою;
      |Адміністратор системи|
      :Натискає кнопку\n"Активні користувачі";
      |Система|
      :Відображає перелік\nактивних користувачів;
      |Адміністратор системи|
      :Відкриває меню\nдій над користувачем;
      |Система|
      :Відображає меню\nдій над користувачем;
      |Адміністратор системи|
      :Натискає кнопку\n"Заблокувати";
      |Система|
      :Відображає вікно зі спадним меню\nвибору причини блокування та кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
        * Може виникнути
        <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Обирає причину\nблокування та натискає кнопку\n“Підтвердити”;
      |Система|
      :Змінює стан облікового запису\nкористувача на “Заблокований”;
      :Сповіщає адміністратора\nпро блокування користувача;
      :Сповіщає користувача\nпро блокування його облікового запису;
      |Адміністратор системи|
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
      :Натискає кнопку\n"Панель адміністратора";
      |Система|
      :Перенаправляє адміністратора\nна сторінку керування системою;
      |Адміністратор системи|
      :Натискає кнопку\n"Заблоковані користувачі";
      |Система|
      :Відображає перелік\nзаблокованих користувачів;
      |Адміністратор системи|
      :Відкриває меню\nдій над користувачем;
      |Система|
      :Відображає меню\nдій над користувачем;
      |Адміністратор системи|
      :Натискає кнопку\n"Розблокувати";
      |Система|
      :Відображає вікно з кнопками\n"Скасувати" і "Підвердити";
      note right #lightcoral
        * Може виникнути
        <b>CancelException</b>
      end note
      |Адміністратор системи|
      :Натискає кнопку\n“Підтвердити”;
      |Система|
      :Змінює стан облікового запису\nкористувача на “Активний”;
      :Сповіщає адміністратора\nпро розблокування користувача;
      :Сповіщає користувача\nпро розблокування його облікового запису;
      |Адміністратор системи|
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
      :Натискає кнопку\n"Користувацька підтримка";
      |Система|
      :Перенаправляє користувача\nна сторінку створення звернення;
      |Користувач|
      :Вводить тему,\nопис звернення та\nприкладає зображення;
      note right #lightcoral
        * Може виникнути
        <b>InvalidDataException</b>
        * Може виникнути
        <b>InvalidFileException</b>
      end note
      |Система|
      :Надсилає звернення до\nскриньки підтримки адміністратора;
      :Сповіщає адміністратора\nпро звернення користувача;
      :Сповіщає користувача\nпро nстворення звернення;
      |Адміністратор системи|
      :Натискає кнопку\n"Панель адміністратора";
      |Система|
      :Перенаправляє адміністратора\nна сторінку керування системою;
      |Адміністратор системи|
      :Натискає кнопку\n"Скринька звернень користувачів";
      |Система|
      :Відображає скриньку\nзвернень користувачів;
      |Адміністратор системи|
      :Обробляє\nзвернення користувача;
      |Користувач|
      stop

@enduml

---
