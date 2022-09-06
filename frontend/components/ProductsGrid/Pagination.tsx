import Button from "../Button";
import { Arrow } from "../icons";

interface Props {
  router: any;
  page: number;
  pageCount: number;
}

const Pagination = ({ router, page, pageCount }: Props) => {
  const navigate = (page: number) => {
    router.query.page = page;
    router.push(router);
  };

  return (
    <div className="flex items-center justify-between gap-4 my-4">
      <Button
        icon={<Arrow className="rotate-90" />}
        title="Previous"
        size="sm"
        onClick={() => navigate(page - 1)}
        color="transparent"
        disabled={page <= 0}
      >Prev</Button>

      <div className="flex items-center gap-2">
      {(page >= 2) && <Button color="transparent" size="sm" onClick={() => navigate(0)}>0</Button>}
      {(page > 2) && <span>...</span>}
        {[...Array(pageCount + 1)].map((_, i) => {
          if ( page === i -1 || page === i || page === i + 1) {
            return <Button color={i === page ? "secondary" : "transparent"} size="sm" onClick={() => navigate(i)}>{i.toString()}</Button>
          }
        })}
      {(pageCount > page + 2) && <span>...</span>}
      {(pageCount >= page + 2) && <Button color="transparent" size="sm" onClick={() => navigate(pageCount)}>{pageCount.toString()}</Button>}
      </div>

      <Button
        title="Next"
        size="sm"
        iconAfter={true}
        color="transparent"
        icon={<Arrow className="rotate-[-90deg]" />}
        onClick={() => navigate(+page + 1)}
        disabled={page >= pageCount}
      >Next</Button>
    </div>
  );
};

export default Pagination;
