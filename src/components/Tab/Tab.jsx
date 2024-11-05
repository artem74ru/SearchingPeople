import "./Tab.css";
import UserList from "../UserList/UserList";

export default function Tab({users}) {

  return (
    <div className="tab-wrapper">
      <div className="tab">
        <input defaultChecked id="tab__btn-1" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-1">Все</label>
        <input id="tab__btn-2" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-2">Дизайн</label>
        <input id="tab__btn-3" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-3">Аналитика</label>
        <input id="tab__btn-4" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-4">Менеджмент</label>
        <input id="tab__btn-5" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-5">iOS</label>
        <input id="tab__btn-6" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-6">Android</label>
        <input id="tab__btn-7" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-7">Техподдержка</label>
        <input id="tab__btn-8" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-8">Backend</label>
        <input id="tab__btn-9" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-9">PR</label>
        <input id="tab__btn-10" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-10">HR</label>
        <input id="tab__btn-11" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-11">QA</label>
        <input id="tab__btn-12" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-12">Бэк-офис</label>
        <input id="tab__btn-13" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-13">Frontend </label>

        <div className="tab-content" id="content-1">
          <UserList users={users}/>
        </div>
        <div className="tab-content" id="content-2">
          <UserList users={users.filter(user => user.department === 'design')}/>
        </div>
        <div className="tab-content" id="content-3">
        <UserList users={users.filter(user => user.department === 'analytics')}/>
        </div>
        <div className="tab-content" id="content-4">
        <UserList users={users.filter(user => user.department === 'management')}/>
        </div>
        <div className="tab-content" id="content-5">
        <UserList users={users.filter(user => user.department === 'ios')}/>
        </div>
        <div className="tab-content" id="content-6">
        <UserList users={users.filter(user => user.department === 'android')}/>
        </div>
        <div className="tab-content" id="content-7">
        <UserList users={users.filter(user => user.department === 'support')}/>
        </div>
        <div className="tab-content" id="content-8">
        <UserList users={users.filter(user => user.department === 'backend')}/>
        </div>
        <div className="tab-content" id="content-9">
        <UserList users={users.filter(user => user.department === 'pr')}/>
        </div>
        <div className="tab-content" id="content-10">
        <UserList users={users.filter(user => user.department === 'hr')}/>
        </div>
        <div className="tab-content" id="content-11">
        <UserList users={users.filter(user => user.department === 'qa')}/>
        </div>
        <div className="tab-content" id="content-12">
        <UserList users={users.filter(user => user.department === 'back_office')}/>
        </div>
        <div className="tab-content" id="content-13">
        <UserList users={users.filter(user => user.department === 'frontend')}/>
        </div>
      </div>
    </div>
  );
}
