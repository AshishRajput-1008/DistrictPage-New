export async function incrementView(id: number) {
  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/adminapi/increment-view/${id}`,
      {
        method: "POST",
      }
    );
  } catch (err) {
    console.error("Failed to increment view", err);
  }
}
