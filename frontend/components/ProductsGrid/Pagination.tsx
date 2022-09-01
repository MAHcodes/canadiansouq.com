import Button from '../Button'
import { Arrow } from '../icons'

interface Props {
  router: any;
  page: number;
  pageCount: number;
}

const Pagination = ({router, page, pageCount}: Props) => {

  const navigate = (page: number) => {
    router.query.page = page;
    router.push(router);
  }

  return (
    <div className="flex items-center justify-between gap-2 my-4">
        <Button
          pad="0"
          icon
          title="Previous"
          text={<Arrow className="w-full h-full rotate-90 min-w-max" />}
          onClick={() => navigate(+page - 1)}
          disabled={+page <= 0}
          />

      <div>

      </div>

        <Button
          pad="0"
          icon
          title="Previous"
          text={<Arrow className="w-full h-full rotate-[-90deg] min-w-max" />}
          onClick={() => navigate(+page + 1)}
          disabled={+page >= pageCount}
          />

    </div>
  )
}

export default Pagination
