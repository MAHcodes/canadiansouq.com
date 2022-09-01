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
        pad="0"
        icon
        title="Previous"
        text={<Arrow className="w-full h-full rotate-90 min-w-max" />}
        onClick={() => navigate(page - 1)}
        disabled={page <= 0}
      />

      <div className="flex items-center gap-2">
      {(page >= 2) && <Button icon text="0" pad="0" onClick={() => navigate(0)} />}
      {(page > 2) && <span>...</span>}
        {[...Array(pageCount + 1)].map((_, i) => {
          if ( page === i -1 || page === i || page === i + 1) {
            return <Button icon={i !== page} sec={i === page} text={i.toString()} pad={page === i ? "px-3 py-1" : "0"} onClick={() => navigate(i)} />
          }
        })}
      {(pageCount > page + 2) && <span>...</span>}
      {(pageCount >= page + 2) && <Button text={pageCount.toString()} icon pad="0" onClick={() => navigate(pageCount)} />}
      </div>

      <Button
        pad="0"
        icon
        title="Previous"
        text={<Arrow className="w-full h-full rotate-[-90deg] min-w-max" />}
        onClick={() => navigate(+page + 1)}
        disabled={page >= pageCount}
      />
    </div>
  );
};

export default Pagination;
