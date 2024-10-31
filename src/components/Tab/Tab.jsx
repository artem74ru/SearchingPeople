import "./Tab.css";
import UserList from "../UserList/UserList";

export default function Tab({users}) {

  return (
    <div className="tab-wrapper">
      <div className="tab">
        <input id="tab__btn-1" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-1">Все</label>
        <input id="tab__btn-2" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-2">Designers</label>
        <input id="tab__btn-3" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-3">Analysts</label>
        <input id="tab__btn-4" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-4">Managers</label>
        <input id="tab__btn-5" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-5">iOS</label>
        <input id="tab__btn-6" name="tab__btn" type="radio" value="" />
        <label for="tab__btn-6">Android</label>

        <div class="tab-content" id="content-1">
          <UserList users={users}/>
        </div>
        <div class="tab-content" id="content-2">
          Дизайнеры
        </div>
        <div class="tab-content" id="content-3">
          Аналитики
        </div>
        <div class="tab-content" id="content-4">
          Менеджеры
        </div>
        <div class="tab-content" id="content-5">
          IOS
        </div>
        <div class="tab-content" id="content-6">
          Android
        </div>
      </div>
    </div>
  );
}
