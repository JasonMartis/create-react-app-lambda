import {
  MdOutlineKeyboardArrowUp,
  MdPersonOutline,
  MdOutlineShoppingCart,
  MdOutlineAttachMoney,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

const Widget = ({ type }) => {
  let data;

  //   temporary
  // const amount = 100;
  const amount = "";
  const diff = 20;

  switch (type) {
    case "student":
      data = {
        title: "STUDENTS",
        isMoney: false,
        link: "See all students",
        icon: (
          <MdPersonOutline
            className="icon-widget"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "REGISTRATIONS",
        isMoney: false,
        link: "View all registrations",
        icon: (
          <MdOutlineShoppingCart
            className="icon-widget"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MdOutlineAttachMoney
            className="icon-widget"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "RATINGS",
        isMoney: true,
        link: "See ratings",
        icon: (
          <MdOutlineAccountBalanceWallet
            className="icon-widget"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="widget-counter">
          {/* {data.isMoney && "$"} {amount} */}
          {data.isMoney} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <MdOutlineKeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
