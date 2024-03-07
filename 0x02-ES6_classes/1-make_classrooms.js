import ClassRoom from "./0-classroom";

/**
 * Creates an array of {@link classroom} with a specific size
 * Returns an array of {@link ClassRoom}s
 */

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
