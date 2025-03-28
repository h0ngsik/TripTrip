"use client";

import { useBoards } from "./hook";

import HotBoards from "../_components/boards/Boards-list/list/components/HotBoards";
import SearchBar from "../_components/boards/Boards-list/list/components/Search";
import BoardsList from "../_components/boards/Boards-list/list";
import Pagination from "../_components/boards/Boards-list/list/components/Pagination";
import styles from "./styles.module.css";

export default function BoardsPage() {
  const { boards, boardsCount, refetchBoards } = useBoards();

  return (
    <div className={styles.mainContainer}>
      <HotBoards />
      <SearchBar refetchBoards={refetchBoards} />
      <div className={styles.boardListContainer}>
        <BoardsList data={boards} refetchBoards={refetchBoards} />
        <Pagination boardsCount={boardsCount} refetchBoards={refetchBoards} />
      </div>
    </div>
  );
}
