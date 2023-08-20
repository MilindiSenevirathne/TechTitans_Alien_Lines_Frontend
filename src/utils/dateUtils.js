const formatDate = (inputDateTime) => {
    const date = new Date(inputDateTime);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
};

export { formatDate };