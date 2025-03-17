const getClassNames = (type) => {
    let classNames = 'notification';
    if (type === "error") classNames += ' error';
    if (type === "success") classNames += ' success';
    return classNames;
};

const Notification = ({ message, type }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={getClassNames(type)}>
        {message}
      </div>
    )
}

export default Notification