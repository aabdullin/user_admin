interface PaginationProps<T> {
  currentPage: number;
  numberOfPages: number;
  onPageChanged: (nextPage: number) => {};
  value: T;
}

const Pagination = ({
  currentPage,
  numberOfPages,
  onPageChanged,
  value,
}: PaginationProps<String>) => {
  console.log(currentPage);
  console.log(numberOfPages);
  console.log(onPageChanged);
  console.log(value);
};

export default Pagination;


let x: String = "";
x = 1;
