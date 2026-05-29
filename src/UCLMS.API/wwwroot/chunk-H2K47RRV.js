// src/app/shared/module-sequence.ts
function navigableItems(course) {
  return [...course.modules].sort((a, b) => a.orderIndex - b.orderIndex).flatMap((m) => [...m.items].sort((a, b) => a.orderIndex - b.orderIndex)).filter((i) => i.itemType !== "SubHeader" && i.isPublished);
}
function adjacentItem(items, currentItemId, dir) {
  const idx = items.findIndex((i) => i.id === currentItemId);
  if (idx === -1)
    return null;
  return items[idx + dir] ?? null;
}
function moduleItemRoute(courseId, item) {
  const query = { itemId: item.id, done: item.isCompleted };
  switch (item.itemType) {
    case "Page":
      return { link: ["/courses", courseId, "pages", item.pageId], query };
    case "Quiz":
      return { link: ["/courses", courseId, "quizzes", item.quizId], query };
    case "Assignment":
      return { link: ["/courses", courseId, "assignments", item.assignmentId], query };
    default:
      return { link: ["/courses", courseId], query: {} };
  }
}

export {
  navigableItems,
  adjacentItem,
  moduleItemRoute
};
//# sourceMappingURL=chunk-H2K47RRV.js.map
