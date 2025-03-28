"use client";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { FetchBoardsDocument } from "@/commons/gql/graphql";
import { convertDateTime } from "@/commons/fomatter/date";
import Image from "next/image";
import styles from "./styles.module.css";

interface IHotBoardProps {
  id: string;
  title: string;
  writer: string;
  likes: number;
  createdAt: string;
}

const HotBoardCard = ({
  id,
  title,
  writer,
  likes,
  createdAt,
}: IHotBoardProps) => {
  const router = useRouter();

  return (
    <div
      className={styles.hotBoardCard}
      onClick={() => router.push(`/boards/${id}`)}
    >
      <div className={styles.imageContainer}>
        <Image
          src="/assets/product1.svg"
          alt="게시글 이미지"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.info}>
          <span className={styles.writer}>
            <Image
              src="/assets/profile.png"
              alt="프로필"
              width={24}
              height={24}
              className={styles.profileImg}
            />
            {writer}
          </span>
          <div className={styles.stats}>
            <span className={styles.likes}>
              <Image
                src="/assets/heart.png"
                alt="좋아요"
                width={16}
                height={16}
              />
              {likes}
            </span>
            <span className={styles.date}>{convertDateTime(createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HotBoards = () => {
  const { data } = useQuery(FetchBoardsDocument, {
    variables: {
      page: 1,
    },
  });

  return (
    <section className={styles.hotBoardsSection}>
      <h2 className={styles.sectionTitle}>오늘 핫한 트립토크</h2>
      <div className={styles.cardsContainer}>
        {data?.fetchBoards.slice(0, 4).map((board) => (
          <HotBoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            writer={board.writer ?? ""}
            likes={24}
            createdAt={board.createdAt}
          />
        ))}
      </div>
    </section>
  );
};

export default HotBoards;
