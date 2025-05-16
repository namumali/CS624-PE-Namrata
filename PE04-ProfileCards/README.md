# Input
Six static profile cards displayed in a grid.
User interaction: tap on a card to expand or collapse.

# Procedure
Each card maintains its own animated state.
A shared state (selectedIndex) tracks which card is currently expanded.
On tap, the selected card animates from a shrunk to expanded size and vice versa.

# Output
A smooth, animated 2-column card layout.
Responsive sizing using Dimensions for consistent spacing.
Enhanced UX using platform-specific shadows and transitions.

